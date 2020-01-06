const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id':1
            ,'image' : 'https://placeimg.com/64/64/any/1'
            ,'name' : '홍길동'
            ,'birthday' : '941231'
            ,'gender' : '남자'
            ,'jobs' : '학생'
          },
          {
            'id':2
            ,'image' : 'https://placeimg.com/64/64/any/2'
            ,'name' : '김철수'
            ,'birthday' : '941231'
            ,'gender' : '남자'
            ,'jobs' : '경찰'
          },
          {
            'id':3
            ,'image' : 'https://placeimg.com/64/64/any/3'
            ,'name' : '최영희'
            ,'birthday' : '941231'
            ,'gender' : '여자'
            ,'jobs' : '디자이너'
          }]
    );
});

app.listen(port, () => console.log(`Listening on port ${port}`));