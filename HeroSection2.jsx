import React from 'react'
import "./HeroSection2.css"
const HeroSection2 = () => {
  return (
    <div>
        <div className='herosection2'>
            
            <div className='logos'>
                <div className='logosinside'>
                    <img src="/images/a (1).png" alt="logo1" />
                    <h3>Branded </h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum asperiores iste nobis molestias inventore iure.</p>
                </div>
                <div className='logosinside'>
                    <img src="/images/a (2).png" alt="logo1" />
                    <h3>Accessible</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum asperiores iste nobis molestias inventore iure.</p>

                </div>
                <div className='logosinside'>
                    <img src="/images/a (1).png" alt="logo1" />
                    <h3>Premium</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum asperiores iste nobis molestias inventore iure.</p>

                </div>

            </div>


        </div>


            <div className='coffeeTypes'>

                <div className='types'>
                <div className='difftypes'>
                    <img src="/images/type3.jpeg" alt="" />

                </div>
                <div className='difftypes'>
                     <img src="/images/type5.jpeg" alt="" />

                </div>
                <div className='difftypes'>
                      <img src="/images/beanswithleaves.jpg" alt="" />

                </div>

                </div>
            </div>

    <div className='sellernames'>
        <div className='sellercenter'>
        <h1>Best Sellers</h1>
        <h4>Coffee is a globally beloved beverage, brewed from roasted coffee beans, known for its stimulating effects and rich aroma. </h4>
        <hr  className='center-line'/>
        </div>
    </div>


    <div className='sellerwraper'>








        <div className='sellers'>
            <div className='seller-card'>
            <img src="/images/browni1.jpg" alt="" />
            <h3>Brownie</h3>
            </div>

            <div className='seller-card'>
             <img src="/images/maemae.jpg" alt="" />
            <h3>Cookies</h3>
            </div>

            <div className='seller-card'>
                 <img src="/images/cookies.jpg" alt="" />
                <h3>Biscuits</h3>
            </div>

            <div className='seller-card'>
            <img src="/images/cake4.webp" alt="" />
            <h3>cake</h3>
            </div>

            <div className='seller-card'>
             <img src="/images/type3.jpeg" alt="" />
            <h3>Esperento</h3>
            </div>

            <div className='seller-card'>
             <img src="/images/type7.jpg" alt="" />
            <h3>Cold Brew</h3>
            </div>

        </div>
    </div>


{/* section 4 */}

    <div className='searchsection'>

        <div className='searchimg'>
            <img src="/images/cupPoring-removebg-preview.png
            " alt="bacha" />
        </div>
        <div className='barsection'>
            <p>Search your items!</p>
            <div class="search-box">
                <input type="text" placeholder="Search..." />
                <button class="search-btn">
                    🔍
                </button>
            </div>
        </div>

    </div>



    {/* section5 */}

    <div className='flavours'>

        <div className='flavourInside'>
            <img src="/images/coffeemilk.jpg" alt="bacha" />
            <div className='circledivs' style={{backgroundColor: "#3d211A", color: "white"}}>
                
                <p>milky</p>
            </div>
        </div>
        <div className='flavourInside'>
            <img src="/images/beans1.jpg" alt="bacha" />
            <div className='circledivs' style=
                {{backgroundColor: "#6f4d38", color: "white"}}>
                <p>milky</p>
            </div>
        </div>
        <div className='flavourInside'>
            <img src="/images/machine.jpg" alt="bacha" />
            <div className='circledivs' style=
            {{backgroundColor: "#cbb799", color: "white"}}>
                <p>milky</p>
            </div>
        </div>


    </div>





    {/* main section div */}
    </div>
 )
}

export default HeroSection2
