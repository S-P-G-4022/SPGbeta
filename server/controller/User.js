
const prisma = require("../db/prisma");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");


const signup = async (req, res) => {
    try {
        console.log('h🤣🤣🤣🤣🤣',req.body)
     const { email , name ,password} = req.body
     
      req.body.password = bcrypt.hashSync(password, 8);
        let result = await prisma.User.create({ data: req.body });
        console.log(result)
        res.status(201).send("Patient  Registred ");
    } catch (error) {
        console.log(error)
        res.status(401).send(error);
    }
};

const signin = async (req,res)=>{
    try {
        const  {email,password}=req.body 
        if(!email && !password){
           return  res.status(400).send("please provide your email and password")
        }
        

            try {
                const User = await prisma.User.findUnique({
                where: {
                    email:email
                    
                }
              })
              if(!User){
                res.status(404).send("user was not found ")
              }

              

              const passwordCompare = await bcrypt.compare(password,User.password)
              if(!passwordCompare){
                res.status(405).send("password doesn't match ")
              }
              
              let token = jwt.sign(
                {
                  id: User.id,
                  
                },
                process.env.JWT_SECRET,
                {
                  expiresIn: "1d",
                }
              );
          
              let loggedUser = {
                id: User.id,
                FullName: User.name,
              };
              token= "Bearer "+token
              res.status(200).json({ loggedUser, token, message: "Login succeeded" });
            
            }catch(error){
                console.log(error)
                res.status(501).send(error)
            }
        }catch(error){
            res.status(400).send(error)
        }
    }
        
       



module.exports = {
    signup,
    signin
}