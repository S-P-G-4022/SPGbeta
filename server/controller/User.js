const prisma = require("../db/prisma");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getUser = async (req, res) => {
  let id=req.id
  try {
    const User = await prisma.User.findUnique({
      where: {
        id
      },select: {  
        email: true,  
        name: true, 
        userProfile: {  
          select: {  
            profilePicture: true, 
            socialLinks:true 
          }  
      },  
    }});
    return res.status(201).send(User);
  } catch (error) {
    console.log(error);

    return res.status(401).send(error);
  }
};
const getFavoris = async (req, res) => {
  let id=req.id
  try {
    const favoris = await prisma.favorisList.findAll({
      where: {
        userId:id
      },select: {  
        game: {  
          select: {  
            names: true, 
            price:true 
          }  
      },  
    }});
    return res.status(201).send(User);
  } catch (error) {
    console.log(error);

    return res.status(401).send(error);
  }
};
const signup = async (req, res) => {
  try {
    
    const { password } = req.body;
    req.body.password = bcrypt.hashSync(password, 8);
    let result = await prisma.User.create({ data: req.body });
    console.log(result);
    let result2 = await prisma.userProfile.create({ data:{userId:result.id,profilePicture:"https://wallpapers.com/images/hd/red-skull-logo-gaming-profile-exzsook5v3aaz1p1.jpg"} });
    return res.status(201).send("user  Registred ");
  } catch (error) {
    console.log(error);

    return res.status(401).send(error);
  }
};

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email && !password) {
      return res.status(400).send("please provide your email and password");
    }
    const User = await prisma.User.findUnique({
      where: {
        email: email,
      },
    });
    if (!User) {
      return res.status(404).send("user was not found ");
    }

    const passwordCompare = await bcrypt.compare(password, User.password);
    if (!passwordCompare) {
      return res.status(405).send("password doesn't match ");
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
    return res
      .status(200)
      .json({token, message: "Login succeeded" });
  } catch (error) {
    return res.status(400).send(error);
  }
};

module.exports = {
  signup,
  signin,
  getUser
};
