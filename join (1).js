let tokens = {};

function generateToken() {
    return Math.random().toString(36).substr(2, 8);
}

export default function handler(req, res) {
    const token = generateToken();
    const expire = Date.now() + 2*60*1000; // 2 דקות
    tokens[token] = expire;


    res.redirect(302, `https://chat.whatsapp.com/LDTYL16qlLKElBe9B63X9G?token=${token}`);
}
