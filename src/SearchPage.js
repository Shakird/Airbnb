import React from 'react';
import './SearchPage.css';
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p>62 stays · 26 august to 30 august · 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location="Entire townhouse · Baltimore"
                title="Stay at this spacious Mt.Vernon House"
                description="6 guest · 3 bedroom · 3 bed · 2.5 bathrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.73}
                price="$180 / night"
                total="$770 total including fees"
            />

            <SearchResult
                img="https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
                location="Entire apartment · Baltimore"
                title="Independent luxury studio apartment"
                description="3 guest · 1 bedroom · 1 bed · 1.5 bathrooms · Wifi · Kitchen"
                star={4.3}
                price="$80 / night"
                total="$370 total including fees"
            />

            <SearchResult
                img="https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg"
                location="Entire apartment · Baltimore"
                title="Luxury Harbor East Condo"
                description="8 guest · 4 bedroom · 5 bed · 2.5 bathrooms · Wifi · Free parking · Washing Machine"
                star={3.8}
                price="$185 / night"
                total="$790 total including fees"
            />
            <SearchResult
                img="https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI"
                location="Entire apartment · Baltimore"
                title="Cozy Apartment near Baltimore Inner Harbor"
                description="3 guest · 1 bedroom · 1 bed · 1.5 bathrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.1}
                price="$75 / night"
                total="$350 total including fees"
            />
            <SearchResult
                img="https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg"
                location="Entire guest suite · Baltimore"
                title="Spacious Peaceful Modern suite in Guilford"
                description="2 guest · 1 bedroom · 1 bed · private bathroom · Wifi · Free parking · Dry Cleaning"
                star={5.0}
                price="$120 / night"
                total="$530 total including fees"
            />
            <SearchResult
                img="https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937"
                location="Entire guest suite · Baltimore"
                title="Baltimore's most Charming Apartment"
                description="2 guest · 1 bedroom · 1 bed · 1.5 bathrooms · Wifi · Washing Machine"
                star={4.23}
                price="$65 / night"
                total="$310 total including fees"
            />
            <SearchResult
                img="https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp"
                location="Entire apartment · Baltimore"
                title="5 Star Luxury Apartment"
                description="2 guest · 1 bedroom · 1 bed · 1.5 bathrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={3.85}
                price="$162 / night"
                total="$700 total including fees"
            />
        </div>
    )
}

export default SearchPage