let tokens = {};

function generateToken() {
    return Math.random().toString(36).substr(2, 8);
}

export default function handler(req, res) {
    const token = generateToken();
    const expire = Date.now() + 2*60*1000; // 2 דקות
    tokens[token] = expire;

    // הפניה אמינה לוואטסאפ
    res.redirect(302, `https://chat.whatsapp.com/I5gl9o1oPTUKTowihWFZOW?token=${token}`);
}
