import { Router } from "express";

const authRouter = Router();

authRouter.post('/sign-up', (res, req) => res.send({ title: 'Sign Up' }));

authRouter.post('/sign-in', (res, req) => res.send({ title: 'Sign In' }));

authRouter.post('/sign-out', (res, req) => res.send({ title: 'Sign Out' }));

export default authRouter;