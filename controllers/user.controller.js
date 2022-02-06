const {response}=require('express')


const userGet=(req, res=response) => {
  res.json(
    {
      "Get":"Desde el controller"
    }
    );
}

const userPut=(req, res=response) => {
  res.json(
    {
      "Put":"aa"
    }
    );
}
const userPost=(req, res) => {
  res.json(
    {
      "Post":"aaJAa"
    }
    );
}
const userDelete=(req, res) => {
  res.json(
    {
      "Delete":"aa"
    }
    );
}


module.exports ={
  userGet,
  userPut,
  userPost,
  userDelete
}