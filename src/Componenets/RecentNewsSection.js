import React from 'react'
import entertainment1_jpg from '../images/entertainment1.jpg'
import { IoArrowForwardCircleSharp } from 'react-icons/io5';
import breakingNews2_jpg from '../images/earthImage.png';

function RecentNewsSection() {
  return (
    <div id='rns-main'>
        <div id='rns-left-main' className="">
            <div id='card-pair'>
            <div id='rns-card' class="card">
                <img  id='rns-image' src={entertainment1_jpg} class="card-img-top" alt="..."/>
                <div id='' className="card-img-overlay">
                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >Technology</button>
                </div>
                <div class="card-body">
                <h4 class="card-title">Traveling makes you more inteligent and more Energetic</h4>
                    <p id='rns-text' class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis urna non neque dignissim sollicitudin. In convallis enim at est tristique, vitae tincidunt metus bibendum. Pellentesque id imperdiet magna...</p>
                
                </div>    
                    <button id='btnrnsRead' className='btn overlay' type="button" ><IoArrowForwardCircleSharp size={40}/></button>
            </div>

            <div id='rns-card' class="card">
                <img  id='rns-image' src={entertainment1_jpg} class="card-img-top" alt="..."/>
                <div id='' className="card-img-overlay">
                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >Technology</button>
                </div>
                <div class="card-body">
                <h4 class="card-title">Traveling makes you more inteligent and more Energetic</h4>
                    <p id='rns-text' class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis urna non neque dignissim sollicitudin. In convallis enim at est tristique, vitae tincidunt metus bibendum. Pellentesque id imperdiet magna...</p>
                
                </div>    
                    <button id='btnrnsRead' className='btn overlay' type="button" ><IoArrowForwardCircleSharp size={40}/></button>
            </div>
            </div>

            <div id='card-pair'>
            <div id='rns-card' class="card">
                <img  id='rns-image' src={entertainment1_jpg} class="card-img-top" alt="..."/>
                <div id='' className="card-img-overlay">
                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >Technology</button>
                </div>
                <div class="card-body">
                <h4 class="card-title">Traveling makes you more inteligent and more Energetic</h4>
                    <p id='rns-text' class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis urna non neque dignissim sollicitudin. In convallis enim at est tristique, vitae tincidunt metus bibendum. Pellentesque id imperdiet magna...</p>
                
                </div>    
                    <button id='btnrnsRead' className='btn overlay' type="button" ><IoArrowForwardCircleSharp size={40}/></button>
            </div>

            <div id='rns-card' class="card">
                <img  id='rns-image' src={entertainment1_jpg} class="card-img-top" alt="..."/>
                <div id='' className="card-img-overlay">
                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >Technology</button>
                </div>
                <div class="card-body">
                <h4 class="card-title">Traveling makes you more inteligent and more Energetic</h4>
                    <p id='rns-text' class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis urna non neque dignissim sollicitudin. In convallis enim at est tristique, vitae tincidunt metus bibendum. Pellentesque id imperdiet magna...</p>
                
                </div>    
                    <button id='btnrnsRead' className='btn overlay' type="button" ><IoArrowForwardCircleSharp size={40}/></button>
            </div>
            </div>

            <div id='card-pair'>
            <div id='rns-card' class="card">
                <img  id='rns-image' src={entertainment1_jpg} class="card-img-top" alt="..."/>
                <div id='' className="card-img-overlay">
                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >Technology</button>
                </div>
                <div class="card-body">
                <h4 class="card-title">Traveling makes you more inteligent and more Energetic</h4>
                    <p id='rns-text' class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis urna non neque dignissim sollicitudin. In convallis enim at est tristique, vitae tincidunt metus bibendum. Pellentesque id imperdiet magna...</p>
                
                </div>    
                    <button id='btnrnsRead' className='btn overlay' type="button" ><IoArrowForwardCircleSharp size={40}/></button>
            </div>

            <div id='rns-card' class="card">
                <img  id='rns-image' src={entertainment1_jpg} class="card-img-top" alt="..."/>
                <div id='' className="card-img-overlay">
                    <button id='btnrnsCatagory' className='btn btn-sm' type="button" >Technology</button>
                </div>
                <div class="card-body">
                <h4 class="card-title">Traveling makes you more inteligent and more Energetic</h4>
                    <p id='rns-text' class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis urna non neque dignissim sollicitudin. In convallis enim at est tristique, vitae tincidunt metus bibendum. Pellentesque id imperdiet magna...</p>
                
                </div>    
                    <button id='btnrnsRead' className='btn overlay' type="button" ><IoArrowForwardCircleSharp size={40}/></button>
            </div>
            </div>
            
        </div>
        <div id='rns-right-main' className=''>
            <div id='rns-Catagory-main'>
                <nav id='rns-cat-nav' class="">  
                       <h4 id='rns-nav-logo' ><span>Catagories</span></h4> 
                </nav>
                <div>
                    <div id='rns-cat-card' className="card" >
                            <img id='rns-cat-image' src={breakingNews2_jpg} className="card-img" alt="..."/>
                        <div id='rns-cat-text' className="card-img-overlay">
                            <h3 id='cat-text' className="card-text"><b>Travel</b></h3>
                            <button id='btnrns-cat-more' className='btn' type="button" ><IoArrowForwardCircleSharp size={40}/></button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default RecentNewsSection
