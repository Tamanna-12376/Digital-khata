export const getjson = (req,res) =>{

    res.json({
        "shop": "Open",
        "counter":"Replies in json",
        "to": "customers"
        });
};

export const postjson = (req,res) =>{
    res.status(200).json({"messsage":"Counter has its first request"});
};
export const putjson = (req,res) =>{
    res.status(200).json({"messsage":"Counter has a request for deleting"});
};
export const deletejson = (req,res) =>{
    res.status(200).json({"messsage":"Counter has a request for deleting"});
};