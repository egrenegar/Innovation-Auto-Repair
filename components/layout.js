import Head from 'next/head';
// import utilStyles from '../styles/utils.module.css'

export default function Layout({ children }) {
    return (
        <div>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Innovation Auto Hail Repair works to restore your vehicle to its pre-storm condition. We work to bring back the value to your car. With experienced technicians working on your vehicle we can guarantee your vehicle is in good hands. Don’t have insurance? No problem! We give special discounts for those paying out of pocket. Have a non-hail related dent? We fix those too! Contact us for any questions or concerns! Keywords: car, repair, hail, damage, crash, accident, collision, free, discount" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Chau+Philomene+One&display=swap"
                    rel="stylesheet"
                ></link>
                <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;700&display=swap" rel="stylesheet"></link>
                <link
                    rel="shortcut icon"
                    type="img/png"
                    href="../public/images/Innovation_Logo-no-bg.png"
                />
            </Head>
                <Header/>
                    <main>{children}</main>
                <Footer/>
            
        </div>
    );
}