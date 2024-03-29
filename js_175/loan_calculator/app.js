const HTTP = require('http');
const URL = require('url').URL;
const QUERYSTRING = require('querystring');
const HANDLEBARS = require('handlebars');
const ROUTER = require('router');
const FINALHANDLER = require('finalhandler');
const SERVESTATIC = require('serve-static');
// const FS = require('fs');
const APR = 5;
const PORT = 3000;
// const PATH = require('path');
// const MIME_TYPES = {
//   '.css': 'text/css',
//   '.js': 'application/javascript',
//   '.jpg': 'image/jpeg',
//   '.png': 'image/png',
//   '.ico': 'image/x-icon'
// };

const LOAN_OFFER_SOURCE = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Loan Calculator</title>
    <link rel="stylesheet" href="/assets/css/styles.css">
  </head>
  <body>
    <article>
      <h1>Loan Calculator</h1>
      <table>
        <tbody>
          <tr>
          <th>Amount:</th>
          <td>
            <a href='/loan-offer?amount={{amountDecrement}}&duration={{duration}}'>- $100</a>
          </td>
          <td>{{amount}}</td>
          <td>
            <a href='/loan-offer?amount={{amountIncrement}}&duration={{duration}}'>+ $100</a>
          </td>
          </tr>
          <tr>
          <th>Duration:</th>
          <td>
            <a href='/loan-offer?amount={{amount}}&duration={{durationDecrement}}'>- 1 year</a>
          </td>
          <td>{{duration}} years</td>
          <td>
            <a href='/loan-offer?amount={{amount}}&duration={{durationIncrement}}'>+ 1 year</a>
          </td>
          </tr>
          <tr>
          <th>APR:</th>
          <td colspan='3'>{{apr}}%</td>
          </tr>
          <tr>
          <th>Monthly payment:</th>
          <td colspan='3'>{{payment}}</td>
          </tr>
        </tbody>
      </table>
    </article>
  </body>
</html>`;

const LOAN_FORM_SOURCE = `<!DOCTYPE html>
<html lang="en">
<head>
  <title>Loan Calculator</title>
  <meta charset="utf-8">
  <link rel="stylesheet" href="/assets/css/styles.css">
  </style>
</head>
<body>
  <article>
    <h1>Loan Calculator</h1>
    <form action="/loan-offer" method="post">
      <p>All loans are offered at an APR of {{apr}}%.</p>
      <label for="amount">How much do you want to borrow (in dollars)?</label>
      <input type="number" name="amount" value="">
      <label for="amount">How much time do you want to pay back your loan?</label>
      <input type="number" name="duration" value="">
      <input type="submit" name="" value="Get loan offer!">
    </form>
  </article>
</body>
</html>`;

const LOAN_OFFER_TEMPLATE = HANDLEBARS.compile(LOAN_OFFER_SOURCE);
const LOAN_FORM_TEMPLATE = HANDLEBARS.compile(LOAN_FORM_SOURCE);

function render(template, data) {
  let html = template(data);
  return html;
};

function parseFormData(request, callback) {
  let body = '';
    request.on('data', chunk => {
      body += chunk.toString();
    });
    request.on('end', () => {
      let data = QUERYSTRING.parse(body);
      data.amount = Number(data.amount);
      data.duration = Number(data.duration);
      callback(data);
    });
};

function getParams(path) {
  const myURL = new URL(path, `http://localhost:${PORT}`);
  let searchParams = myURL.searchParams;
  let data = {};
  data.amount = Number(searchParams.get('amount'));
  data.duration = Number(searchParams.get('duration'));

  return data;
};

// function getPathname(path) {
//   const myURL = new URL(path, `http://localhost:${PORT}`);
//   return myURL.pathname;
// };

function calculateLoan(amount, duration, apr) {
  let totalMonths = duration * 12;
  let monthlyRate = (apr / 100) / 12;

  return (amount * (monthlyRate / (1 - Math.pow((1 + monthlyRate), (-totalMonths))))).toFixed(2);
};

function createLoanOffer(data) {
  data.amountIncrement = data.amount + 100;
  data.amountDecrement = data.amount - 100;
  data.durationIncrement = data.duration + 1;
  data.durationDecrement = data.duration - 1;
  data.apr = APR;
  data.payment = calculateLoan(data.amount, data.duration, APR);

  return data;
};

let router = ROUTER();
router.use(SERVESTATIC('public'));

router.get('/', function(req, res) {
  let content = render(LOAN_FORM_TEMPLATE, {apr: APR});

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write(`${content}\n`);
  res.end();
});

router.get('/loan-offer', function (req, res) {
  let data = createLoanOffer(getParams(req.url));
  let content = render(LOAN_OFFER_TEMPLATE, data);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write(`${content}\n`);
  res.end();
});

router.post('/loan-offer', function(req, res) {
  parseFormData(req, parsedData => {
    let data = createLoanOffer(parsedData);
    let content = render(LOAN_OFFER_TEMPLATE, data);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write(`${content}\n`);
    res.end();
  });
});

// function getIndex(res) {
//   let content = render(LOAN_FORM_TEMPLATE, {apr: APR});

//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.write(`${content}\n`);
//   res.end();
// };

// function getLoanOffer(res, path) {
//   let data = createLoanOffer(getParams(path));
//   let content = render(LOAN_OFFER_TEMPLATE, data);

//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.write(`${content}\n`);
//   res.end();
// };

// function postLoanOffer(req, res) {
//   parseFormData(req, parsedData => {
//     let data = createLoanOffer(parsedData);
//     let content = render(LOAN_OFFER_TEMPLATE, data);

//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.write(`${content}\n`);
//     res.end();
//   });
// };

const SERVER = HTTP.createServer((req, res) => {
  router(req, res, FINALHANDLER(req, res));
  // let path = req.url;
  // let pathname = getPathname(path);
  // let fileExtension = PATH.extname(pathname);

  // FS.readFile(`./public/${pathname}`, (err, data) => {
  //   if (data) {
  //     res.statusCode = 200;
  //     res.setHeader('Content-Type', `${MIME_TYPES[fileExtension]}`);
  //     res.write(`${data}\n`);
  //     res.end();
  //   } else {
  //     let method = req.method;
  //     if (method === 'GET' && pathname === '/') {
  //       getIndex(res);
  //     } else if (method === 'GET' && pathname === '/loan-offer') {
  //       getLoanOffer(res, path);
  //     } else if (method === 'POST' && pathname === '/loan-offer') {
  //       postLoanOffer(req, res);
  //     } else {
  //       res.statusCode = 404;
  //       res.end();
  //     }
  //   }
  // });
});

SERVER.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});