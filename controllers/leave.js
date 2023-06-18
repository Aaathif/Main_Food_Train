import Leave from "../models/Leave.js";

export const createLeave = async (req, res, next) => {
    const newLeave = new Leave(req.body)

    try {
        const savedLeave = await newLeave.save()
        res.status(200).json(savedLeave)
    } catch (err) {
        next(err)
    }
}

export const getLeave = async (req, res, next) => { 
    try {
        const getLeave = await Leave.findById(
            req.params.id, 
            // { $set: req.body},
            // {new:true}
        )
        res.status(200).json(getLeave)
    } catch (err) {
        next(err)
    }
}

//GET All MenuList
export const getLeaves = async (req, res, next) => { 
    try {
        const getLeaves = await Leave.find()
        res.status(200).json(getLeaves)
    } catch (err) {
        next(err)
    }
}

export const updateLeave = async (req,res,next)=>{
    try {
      const updatedLeave = await Leave.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedLeave);
    } catch (err) {
      next(err);
    }
  }
  export const deleteLeave = async (req,res,next)=>{
    try {
      await Leave.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted.");
    } catch (err) {
      next(err);
    }
  }