import { Router } from 'express';
import is from '@sindresorhus/is';
import { signinRequired } from '../middlewares/signin-required.js';
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

// 일반 로그인
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
    //res.cookie('jwtToken', userService.signin.token, { httpOnly: true });
    res.status(200).json(signinResult);
    // jwt 토큰 쿠키 저장
    res.cookie('jwtToken', signinResult.token, { httpOnly: true });
    //res.redirect('/');
  } catch (error) {
    next(error);
  }
});

// 로그아웃 -> 서버 요청 없이 프론트에서 수행하면 됨
userRouter.post('/signout', signinRequired, async (req, res) => {
  // jwt 토큰 쿠키를 없앰으로써 로그아웃
  res.clearCookie('jwtToken');
  res.redirect('/');
});

// 사용자 정보 조회
userRouter.get('/:userId', signinRequired, async (req, res, next) => {
  try {
    const { userId } = req.params;
    const currentUserInfo = await userService.getUserData(userId);
    res.status(200).json(currentUserInfo);
  } catch (error) {
    next(error);
  }
});

// // 사용자 정보 수정 시 비밀번호 확인(?)
// userRouter.post(
//   '/password-check',
//   // signinRequired,
//   async (req, res, next) => {
//     try {
//       // application/json 설정을 프론트에서 안 하면, body가 비어 있게 됨.
//       if (is.emptyObject(req.body)) {
//         throw new Error(
//           'headers의 Content-Type을 application/json으로 설정해주세요'
//         );
//       }

//       // req (request) 에서 데이터 가져오기
//       const userId = req.currentUserId;
//       const { password } = req.body;

//       // 비밀번호가 알맞는지 여부를 체크함
//       const checkResult = await userService.checkUserPassword(userId, password);

//       res.status(200).json(checkResult);
//     } catch (error) {
//       next(error);
//     }
//   }
// );

// // 사용자 정보 수정
// userRouter.put('/:userId', signinRequired, async (req, res, next) => {
//   try {
//     if (is.emptyObject(req.body)) {
//       throw new Error(
//         'headers의 Content-Type을 application/json으로 설정해주세요'
//       );
//     }
//     // params로부터 id를 가져옴
//     const { userId } = req.query;

//     // const user = await userService.findById(userId);

//     const { username, email, password, mobileNumber, address, role } = req.body;

//     // body data로부터, 확인용으로 사용할 현재 비밀번호를 추출
//     const { inputPassword } = req.body;

//     if (!inputPassword) {
//       throw new Error('정보를 변경하려면, 현재의 비밀번호가 필요합니다.');
//     }

//     const userInfoRequired = { userId, inputPassword };

//     // 위 데이터가 undefined가 아니라면, 즉, 프론트에서 업데이트를 위해
//     // 보내주었다면, 업데이트용 객체에 삽입함.
//     const toUpdate = {
//       ...(username && { username }),
//       ...(email && { email }),
//       ...(password && { password }),
//       ...(address && { address }),
//       ...(mobileNumber && { mobileNumber }),
//       ...(role && { role }),
//     };

//     // 사용자 정보를 업데이트함.
//     const updatedUserInfo = await userService.setUser(
//       userInfoRequired,
//       toUpdate
//     );

//     res.status(200).json(updatedUserInfo);
//   } catch (error) {
//     next(error);
//   }
// });

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
userRouter.get('/admins/user', adminOnly, async (req, res, next) => {
  try {
    const users = await userService.getUsers();

    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

// 관리자 토큰을 가졌는지 여부를 확인함.
userRouter.get('/admins/check', adminOnly, async (req, res, next) => {
  try {
    // 미들웨어 adminOnly 를 통과했다는 것은, 관리자 토큰을 가진 것을 의미함.
    res.status(200).json({ result: 'success' });
  } catch (error) {
    next(error);
  }
});

export { userRouter };
