const app = require("express")();
const server = require("http").createServer(app);
const cors = require('cors');

const io = require("socket.io")(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Hello");
})

io.on('connection', (socket) => {
    socket.emit('me', socket.id);

    socket.on('disconnect', () => {
        socket.broadcast.emit('call-ended');
    })

    socket.on('call-user', ({ userToCall, signalData, from, name }) => {
        io.to(userToCall).emit('call-user', { signal: signalData, from, name })
    })

    socket.on('answer-call', (data) => {
        io.to(data.to).emit('call-accepted', data.signal)
    })
})

server.listen(PORT, () => console.log(`Server running on ${PORT}`));