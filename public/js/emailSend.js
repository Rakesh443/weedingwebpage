import { createTransport } from './node_modules/nodemailer'


const sender = createTransport({
    host : 'smtp.gmail.com',
    port : 465,    
    service : 'gmail',
    secure:true,
    auth : {
        user : 'rakesh85238@gmail.com',
        pass : 'mayday@15'
    }
})


const msg ={
    from : 'dontreply@gmail.com',
    to : 'rakesh.great.6565@gmail.com',
    subject : 'Test mail',
    text : 'Test mail'
}



sender.sendMail(msg,function(err,info) {
    if(err){
        console.log(err)
    }
    else{
        console.log('sent')
    }
})