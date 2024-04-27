import PaymentRadio from '@/components/payment/PaymentRadio'
import React from 'react'

function page() {
  return (
    <section className='max-w-xl mx-auto px-2'>
    <PaymentRadio title='Mandiri' price={120}/>
    <PaymentRadio title='Gopay' price={120}/>
    <PaymentRadio title='Shopeepay' price={120}/>
    </section>
  )
}

export default page