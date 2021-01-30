import React, { useState, useEffect } from 'react';

import './css/header.css';

export default function MainMenu() {

    const [genru, setGenru] = useState('null');
    const changeGenru = event => {
        setGenru(event.target.value);
    }
    /* 検索範囲の距離をstateで管理 */
    const [distance, setDistance] = useState(0);
    const changeDistance = event => {
        setDistance(event.target.value);
    }
    
    return(
        <ul className="menu-list">
            <li className="genru-area">
                <select className="list-genru" onChange={changeGenru}>
                    <option value="null">ジャンル</option>
                    <option value="food"> 食べ物</option>
                    <option value="electric">家電</option>
                    <option value="hoge">コスメ</option>
                    <option value="fuga">雑貨</option>
                </select>
                <div className="current-genru">{genru}</div>
            </li>
            <li className="distance-area">
                <select className="list-distance" onChange={changeDistance}>
                    <option value="null">検索範囲</option>
                    <option value="0.5">500m</option>
                    <option value="1">1km</option>
                    <option value="2">2km</option>
                    <option value="3">3km</option>
                    <option value="4">4km</option>
                    <option value="5">5km</option>
                </select>
                <div className="currentDistance">{distance}</div>
            </li>
        </ul>
    )
}