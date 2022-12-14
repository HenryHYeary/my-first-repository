function createInvoice(services = {}) {
    let phoneCharge = services.phone || 3000;
  
    let internetCharge = services.internet || 5500;
  
    return {
      phone: phoneCharge,
      internet: internetCharge,
  
      total() {
        return this.phone + this.internet
      },
  
      localPayments: [],
  
      addPayment(amount) {
        this.localPayments.push(amount);
      },
  
      addPayments(amounts) {
        this.localPayments = this.localPayments.concat(amounts);
      },
  
      amountDue() {
        return this.total() - this.localPayments.reduce((sum, next) => sum + next.total(), 0);
      },
    };
  }
  
  
  function invoiceTotal(invoices) {
    let total = 0;
  
    for (let index = 0; index < invoices.length; index += 1) {
      total += invoices[index].total();
    }
  
    return total;
  }
  
  let invoices = [];
  invoices.push(createInvoice());
  invoices.push(createInvoice({ internet: 6500 }));
  invoices.push(createInvoice({ phone: 2000 }));
  invoices.push(createInvoice({
    phone: 1000,
    internet: 4500,
  }));
  
  console.log(invoiceTotal(invoices)); // 31000
  
  function createPayment(services = {}) {
    let phonePayment = services.phone || 0;
  
    let internetPayment = services.internet || 0;
  
    let fullAmount = services.amount || 0;
  
    return {
      phone: phonePayment,
      internet: internetPayment,
      amount: fullAmount,
  
      total() {
        return this.phone + this.internet + this.amount;
      }
    }
  }
  
  function paymentTotal(payments) {
    return payments.reduce((sum, payment)  => sum + payment.total(), 0);
  }
  
  let payments = [];
  payments.push(createPayment());
  payments.push(createPayment({
    internet: 6500,
  }));
  
  payments.push(createPayment({
    phone: 2000,
  }));
  
  payments.push(createPayment({
    phone: 1000,
    internet: 4500,
  }));
  
  payments.push(createPayment({
    amount: 10000,
  }));
  
  console.log(paymentTotal(payments));      // => 24000
  
  let invoice = createInvoice({
    phone: 1200,
    internet: 4000,
  });
  
  let payment1 = createPayment({ amount: 2000 });
  let payment2 = createPayment({
    phone: 1000,
    internet: 1200
  });
  
  let payment3 = createPayment({ phone: 1000 });
  
  invoice.addPayment(payment1);
  invoice.addPayments([payment2, payment3]);
  console.log(invoice.amountDue());       // this should return 0