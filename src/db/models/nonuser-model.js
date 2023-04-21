import mongoose from 'mongoose';
import NonuserSchema from '../schemas/nonuser-schema.js';

export default mongoose.model('Nonuser', NonuserSchema);