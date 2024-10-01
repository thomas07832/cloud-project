import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
function BasicExample() {
  return (
    <>
    <div style={{ 
        background: 'linear-gradient(to bottom, #000058 50%,  rgba(10, 10, 175, 0.3) 50%', // Gradient from dark blue to lighter blue
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)' 
      }}
>
    <div className="p-4">
      {/* New Section */}
      <section className="text-gray-600 body-font mb-8">
        <div className="container px-5 py-1 mx-auto">
          <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
            <h1 className="flex-grow sm:pr-16 text-3xl font-medium title-font text-white">
            Choose from the most popular 
            <span className='text-[#ff8c69]  '> company types</span>
           
            </h1>
            <button className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">
           
      <Badge bg="danger " className='pull-left'>New</Badge>   Find your company type
            </button>
          </div>
        </div>
      </section>

      {/* Card Section */}
      <div className="flex flex-col sm:flex-row justify-center items-stretch space-y-4 sm:space-y-0 sm:space-x-4">
        {[
          {
            title: "Private Limited Company (Pvt. Ltd.)",
            price: "₹1,499",
            items: [
              "Service-based businesses",
              "Businesses looking to issue shares",
              "Businesses seeking investment through equity-based funding"
            ],
            registerText: "Register Pvt. Ltd."
          },
          {
            title: "Limited Liability Partnership (LLP)",
            price: "₹1,499",
            items: [
              "Professional services",
              "Firms seeking any capital contribution from Partners",
              "Firms sharing resources with limited liability"
            ],
            registerText: "Register LLP"
          },
          {
            title: "One Person Company (OPC)",
            price: "₹1,499",
            items: [
              "Freelancers, Small-scale businesses",
              "Businesses looking for minimal compliance",
              "Businesses looking for single-ownership"
            ],
            registerText: "Register OPC"
          }
        ].map((card, index) => (
          <Card
            key={index}
            className="flex flex-col justify-between p-4 w-full sm:w-80 md:w-96 transition-transform duration-300 hover:scale-105"
            style={{ backgroundColor: '#000058' }}
          >
            <Card.Body className="flex flex-col">
              <Card.Title className="text-white">{card.title}</Card.Title>
              <div className="text-center">
                <span className="text-2xl font-bold text-[#ff8c69] font-mono">{card.price}</span>
                <span className="mb-8 leading-relaxed text-xs text-gray-500"> + Govt. Fee</span>
              </div>
              <hr className="text-white" />
              <Card.Text>
                <ul className="list-disc list-inside text-white">
                  {card.items.map((item, idx) => (
                    <li key={idx} className="text-left">{item}</li>
                  ))}
                </ul>
              </Card.Text>
            </Card.Body>
            <div className="flex justify-between mt-4">
              <Button variant="outline-light">Learn more</Button>
              <Button variant="primary">{card.registerText}</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>


<div>


</div>

<div className='pb-12'>

<h2 className='text-center font-sans pt-12 pb-4 text-[#ff8c69] '>What's Included?</h2>

<div className='text-center'>
<span className='text-white px-2 text-xl '>✔️ Registration in 7-10 Business Days</span>
<span className='text-white px-2 text-xl'>✔️ Company PAN and TAN</span>
<span className='text-white px-2 text-xl'>✔️ Company Name Approval</span>
</div>

<div className='text-center'>
<span className='text-white px-2 p-1 text-xl '>✔️ MOA & AOA</span>
<span className='text-white px-2 text-xl'>✔️ Incorporation Certificate
</span>
<span className='text-white px-2 text-xl'>✔️ DSC Tokens</span>
<span className='text-white px-2 text-xl'>✔️ DSC Support & Shipping</span>
</div>

<div className='text-center'>
<span className='text-white px-2 text-xl '>✔️ Digital Signature Certificates</span>
<span className='text-white px-2 text-xl'>✔️ Director’s Identification Number (DIN)</span>
</div>


<div className='text-center'>
<span className='text-white px-2 text-xl '>✔️ 25% off on Razorpay Business Banking and Payroll</span>
</div>

</div>
</div>

</>
  );
}

export default BasicExample;
