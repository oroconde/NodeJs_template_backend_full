import app from './app';
import PORT from './config'

app.listen(PORT, ()=>{
    console.log(`running on port ${PORT}`)
})
