const {request, response} = require("express");
const {equipos} = require("./equipos");

const getEquipos = (req, res)=>{
    return res.json({
        ok:true,
        statusCode: 200,
        equipos
    });
}

const getEquiposById = (req = request, res = response)=>{
    let id = parseInt(req.params.id);
    let equipoBuscar = "";
    equipoBuscar = equipos.find((equipos)=>{
        return equipos.id === id;
    })

    if (equipoBuscar){
        return res.json({
            ok:true,
            statusCode: 200,
            equipoBuscar
        });
    }else{
        return res.json({
            ok:false,
            statusCode:404,
            msg:"No hay equipos con ese id"
        });
    }
}

module.exports={
    getEquipos,
    getEquiposById
}