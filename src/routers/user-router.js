import { Router } from 'express';
import is from '@sindresorhus/is';
import { signinRequired } from '../middlewares/signin-required.js'; // export default 예시
import { adminOnly } from '../middlewares/admin-only.js';
import { userService } from '../services/user-service.js';

const userRouter = Router();

// 회원가입
userRouter.post('/signup', async (req, res, next) => {
  try {
    //application/json 설정을 프론트에서 안 하면, body가 비어 있게 됨.
    if (is.emptyObject(req.body)) {
      throw new Error(
        'headers의 Content-Type을 application/json으로 설정해주세요'
      );
    }

    // req (request) 에서 데이터 가져오기
    const { username, email, password, mobileNumber, address, role } = req.body;

    // 위 데이터를 유저 db에 추가하기
    const newUser = await userService.signup({
      username,
      email,
      password,
      mobileNumber,
      address,
      role,
    });

    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
});

// 로그인
userRouter.post('/signin', async (req, res, next) => {
  const userInfo = req.body;

  try {
    // application/json 설정을 프론트에서 안 하면, body가 비어 있게 됨.
    if (is.emptyObject(req.body)) {
      throw new Error(
        'headers의 Content-Type을 application/json으로 설정해주세요'
      );
    }

    // req (request) 에서 데이터 가져오기
    const { email, password } = userInfo;

    // 위 데이터가 db에 있는지 확인하고,
    // db 있을 시 로그인 성공 및, 토큰 및 관리자 여부 받아오기
    const signinResult = await userService.signin({ email, password });

    console.log('signinResult : ', signinResult);
    // jwt 토큰 쿠키 저장
    res.cookie('jwtToken', signinResult.token, { httpOnly: true });
    res.status(200).json(signinResult);
    //res.redirect('/');
  } catch (error) {
    next(error);
  }
});

// 로그아웃
userRouter.post('/signout', signinRequired, async (req, res) => {
  // jwt 토큰 쿠키를 없앰으로써 로그아웃
  res.cookie('jwtToken', '', { expires: new Date(0) });
  // res.clearCookie('jwtToken');
  res.redirect('/signIn');
});

// 이메일 중복 조회
userRouter.post('/signup/check-email-duplication', async (req, res, next) => {
  try {
    const { email } = req.body;
    const checkEmailDuplicate = await userService.checkEmailDuplication(email);

    res.status(200).json(checkEmailDuplicate);
  } catch (error) {
    next(error);
  }
});

//토큰 디코드(복호화)
userRouter.post('/token-decode', async (req, res, next) => {
  try {
    const { jwtToken } = req.cookies;
    const getTokenDecode = await userService.getDecodeToken(jwtToken);

    res.status(200).json(getTokenDecode);
  } catch (error) {
    next(error);
  }
});

// userId 조회
userRouter.get('/myId', signinRequired, userService.getUserId);

// 사용자 정보 조회
userRouter.get('/:userId', signinRequired, async (req, res, next) => {
  try {
    const { userId } = req.params;
    const userInfo = await userService.getUserData(userId);
    res.status(200).json(userInfo);
  } catch (error) {
    next(error);
  }
});

// 사용자 정보 수정 시 비밀번호 확인
userRouter.post('/password-check', signinRequired, async (req, res, next) => {
  try {
    // application/json 설정을 프론트에서 안 하면, body가 비어 있게 됨.
    if (is.emptyObject(req.body)) {
      throw new Error(
        'headers의 Content-Type을 application/json으로 설정해주세요'
      );
    }

    // req (request) 에서 데이터 가져오기
    const { userId } = req;
    const { password } = req.body;

    // 비밀번호가 알맞는지 여부를 체크함
    const checkResult = await userService.checkUserPassword(userId, password);

    res.status(200).json(checkResult);
  } catch (error) {
    next(error);
  }
});

// 사용자 정보 수정
userRouter.put('/:userId', signinRequired, async (req, res, next) => {
  try {
    if (is.emptyObject(req.body)) {
      throw new Error(
        'headers의 Content-Type을 application/json으로 설정해주세요'
      );
    }
    const { userId } = req.params;

    // const user = await userService.findById(userId);

    const { currentPassword, password, mobileNumber, address } = req.body;

    if (!currentPassword) {
      throw new Error('정보를 변경하려면, 현재의 비밀번호가 필요합니다.');
    }

    const userInfoRequired = { userId, currentPassword };

    // 위 데이터가 undefined가 아니라면, 업데이트용 객체에 삽입
    const toUpdate = {
      ...(password && { password }),
      ...(address && { address }),
      ...(mobileNumber && { mobileNumber }),
    };

    // 사용자 정보 업데이트
    const updatedUserInfo = await userService.setUser(
      userInfoRequired,
      toUpdate
    );

    res.status(200).json(updatedUserInfo);
  } catch (error) {
    next(error);
  }
});

//사용자 회원 탈퇴
userRouter.delete('/:userId', signinRequired, async (req, res, next) => {
  try {
    // params로부터 id를 가져옴
    const { userId } = req.params;

    const deleteResult = await userService.deleteUserData(userId);

    res.status(200).json(deleteResult);
  } catch (error) {
    next(error);
  }
});

// ======== 관리자 기능 ========

// 전체 사용자 목록 조회
userRouter.get(
  '/admins/user-list-inquiry',
  adminOnly,
  async (req, res, next) => {
    try {
      const users = await userService.getUsers();

      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }
);

// 관리자 토큰을 가졌는지 여부를 확인함.
userRouter.get('/admins/token-check', adminOnly, async (req, res, next) => {
  try {
    // 미들웨어 adminOnly 를 통과했다는 것은, 관리자 토큰을 가진 것을 의미함.
    res.status(200).json({ result: 'success' });
  } catch (error) {
    next(error);
  }
});

export { userRouter };
