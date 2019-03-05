var tokenStore = require("./../routes/loginDal");
module.exports = {

    validteTokn(rcvToken)
    {
        console.log(rcvToken+"  recv token");

        console.log(tokenStore+"   token generated")

    }
}