const Item = require('../models/Items')
const {asyncWrapper} = require('../middleware/asyncjs')
const {createCustomError} = require('../errors/custom-error')


const getAllItems = asyncWrapper(async (req, res) => {
    const items = await Item.find({});
    res.status(200).json({ items });
});

const createItem = asyncWrapper(async (req, res) => {
    console.log('create item')
    console.log(req.body);
    
    const { author_id, name, title, img_uri } = req.body;
    const query = {
        author_id,
        name,
        title,
        img_uri,
        created_at: Date.now(),
        views: 0
    }

    console.log(query);
    const item = await Item.create(query);
    if (!item) {
        return next(createCustomError(`Cannot create new item!`, 500));
    }
    console.log(item);
        res.status(201).json({ item });
})


const getItem = asyncWrapper (async (req, res, next) => {
 
        const {id:itemID} = req.params;
        const item = await Item.findOne({ _id:itemID});
    if (!item) {
        return next(createCustomError(`No item with id ${itemID}`, 404));
        }
        res.status(200).json({item})
})




const deleteItem = asyncWrapper( async (req, res) => {
        const { id: itemID } = req.params
        const item = await Item.findOneAndDelete({ _id: itemID });

        if (!item) {
            return res.status(404).json({ msg: `Not found item with id ${itemID}` });
        }
        res.status(200).json({item: null, status: 'deleted successfully'})
})

const updateItem = asyncWrapper( async (req, res) => {
        const { id: itemID } = req.params;
        const item = await Item.findOneAndUpdate({ _id: itemID }, req.body, {
            new: true,
            runValidators: true,
        })
        if (!item) {
            return res.status(404).json({ msg: `Not found item with id ${itemID}` });
        }
        res.status(200).json({item})
})


// REDUNDACJA
//
///
// const getAllItems = async (req, res) => {
//     try {
//         const items = await Item.find({});
//         res.status(200).json({ items });
//     } catch (error) {
//         res.status(500).json({ msg: error });
//     }
// }

// const createItem = async (req, res) => {
//     try {
//         const item = await Item.create(req.body);
//         res.status(201).json({ item });
//     } catch (error) {
//         res.status(500).json({ msg: error });
//     }
// }


// const getItem = async (req, res) => {
//     try {
//         const {id:itemID} = req.params;
//         const item = await Item.findOne({ _id:itemID});
//         if (!item) {
//             return res.status(404).json({ msg: `No item with id ${itemID}` });
//         }
//         res.status(200).json({item})
//     } catch (error) {
//         res.status(500).json({ msg: error });
//     }
// }




// const deleteItem = async (req, res) => {
//     try {
//         const { id: itemID } = req.params
//         const item = await Item.findOneAndDelete({ _id: itemID });

//         if (!item) {
//             return res.status(404).json({ msg: `Not found item with id ${itemID}` });
//         }

//         res.status(200).json({item: null, status: 'deleted successfully'})
//     } catch (error) {
//         res.status(500).json({ msg: error });
//     }
// }

// const updateItem = async (req, res) => {
//     try {
//         const { id: itemID } = req.params;

//         const item = await Item.findOneAndUpdate({ _id: itemID }, req.body, {
//             new: true,
//             runValidators: true,
//         })
//         if (!item) {
//             return res.status(404).json({ msg: `Not found item with id ${itemID}` });
//         }

        
//         res.status(200).json({item})
//     } catch (error) {
//         res.status(500).json({msg: error})
//     }
// }


module.exports = {
    getAllItems,
    createItem,
    getItem,
    updateItem,
    deleteItem
}