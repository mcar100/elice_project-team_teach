import mongoose from 'mongoose';
import NonuserSchema from '../schemas/nonuser-schema';

export default mongoose.model('Nonuser', NonuserSchema);