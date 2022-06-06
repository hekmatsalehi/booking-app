import express from 'express';

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello form auth.js')
});

router.get('/signup', (req, res) => {
    res.send('Hi from api/auth/signup')
})

export default router;