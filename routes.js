import express from 'express';
const router = express.Router()
import {pool as db} from './db.js'


router.get('/', (request, response) => {
  const statement = `select * from emp`
  db.query(statement, (error, data) => {
    if (error) {
      response.send('error')
    } else {
      response.send(data)
    }
  })
})
router.post('/post', (req, resp) => {
  console.log("hiii")
  console.log(req.body.ename);
  const statement = `insert into emp(id,ename,pass,empid,dname,doj) values(${req.body.id},'${req.body.ename}','${req.body.pass}',${req.body.empid},'${req.body.dname}',now())`;
  db.query(statement, (error, data) => {
    if (error) {
      resp.send('error')
    } else {
      resp.send("record added!!!")
    }
  })
})
router.post('/update', (req, resp) => {
  const statement = `update emp set ename='${req.body.ename}', pass='${req.body.pass}' where id=${req.body.id}`;
  db.query(statement, (error, data) => {
    if (error) {
      resp.send('error')
    } else {
      resp.send("record updated!!")
    }
  })
})

router.post('/delete', (req, resp) => {
  const statement = `delete from emp where id=${req.body.id}`;
  db.query(statement, (error, data) => {
    if (error) {
      resp.send('error')
    } else {
      resp.send("Record deleted sucessfully!!!")
    }
  })
})
export {router}