import app from './app';
import server_port from './config'

app.listen(server_port, ()=>{
    console.log(`running on port ${server_port}`)
})
