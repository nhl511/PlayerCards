import React from 'react'
import { useState } from 'react'

export default function PlayersPresentation({players}) {
    const [player, setPlayer] = useState([])
    console.log(players);
  return (
    <div className='container'>
        <br/>
        <div className="row row-cols-3 d-flex justify-content-around">
            {players.map((player)=>(
                <div className="card col ps-0 pe-0 mb-5">
                    <img src= {player.img} className="card-img-top" alt="..."/>
                    <div className="card-body bg-light">
                        <h5 className="card-title text-center">{player.name}</h5>
                        <p className="card-text d-flex justify-content-center">{player.club}</p>
                        <a data-bs-toggle="modal" data-bs-target="#exampleModal" type="button" onClick={() => {setPlayer(player)}} className="btn btn-dark d-flex justify-content-center">Detail</a>
                    </div>
                </div>
            ))}
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">

                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <img className="mb-3" style = {{width: "100%"}} src = {player.img}/>
                        <h2>{player.name}</h2>
                        <div>
                            {player.info}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}
