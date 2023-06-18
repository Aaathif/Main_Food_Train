import AddEmpo from "../models/AddEmpo.js";

export const createAddEmpo = async (req, res, next) => {
    const newAddEmpo = new AddEmpo(req.body)

    try {
        const savedAddEmpo = await newAddEmpo.save()
        res.status(200).json(savedAddEmpo)
    } catch (err) {
        next(err)
    }


}

export const getAddEmpo = async (req, res, next) => { 
    try {
        const Empo = await AddEmpo.findById(
            req.params.id, 
            // { $set: req.body},
            // {new:true}
        )
        res.status(200).json(Empo)
    } catch (err) {
        next(err)
    }
}
export const getAddEmpos = async (req, res, next) => { 
    try {
        const getAddEmpos = await AddEmpo.find()
        res.status(200).json(getAddEmpos)
    } catch (err) {
        next(err)
    }
}

export const updateAddEmpo = async (req,res,next)=>{
    try {
      const updatedAddEmpo = await AddEmpo.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedAddEmpo);
    } catch (err) {
      next(err);
    }
  }

  export const deleteAddEmpo = async (req,res,next)=>{
    try {
      await AddEmpo.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted.");
    } catch (err) {
      next(err);
    }
  }
