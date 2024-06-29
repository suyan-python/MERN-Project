const schema = require('./schema');
const token = require('../authentication/controller')

const getAll = async (req, res) =>
{
    const data = await schema.find({}).select({ password: 0 });
    // select * from category;
    res.send({
        status: 900,
        message: 'Data retrieved',
        data: data
    });

    console.log(data);

    req.user = data;
    req.token = token.login.token;
    req.userID = data._id;
    // try
    // {
    //     const userData = req.user;
    //     console.log(userData);
    //     return res.status(200).json({ msg: userData })

    // } catch (error)
    // {
    //     console.log(`Error from user ${error}`);
    // }
}

const getById = async (req, res) =>
{
    const data = await schema.findById(req.params.id);
    if (data)
    {
        res.send({
            status: 200,
            message: 'Data retrieved',
            data: data
        });
    } else
    {
        res.send({
            status: 404,
            message: 'Data could not be found',
            data: data
        });
    }
}

const create = async (req, res) =>
{
    try
    {
        const data = await schema.create({
            ...req.body
        });
        res.send({
            status: 201,
            message: 'Data created',
            data: data
        })
    } catch (e)
    {
        res.status(400).send({
            status: 400,
            message: 'Action could not be completed',
            data: e
        })
    }
}

const update = async (req, res) =>
{
    try
    {
        await schema.findByIdAndUpdate(req.params.id, {
            ...req.body
        });
        res.send({
            status: 200,
            message: 'Data updated'
        })
    } catch (e)
    {
        res.status(400).send({
            status: 400,
            message: 'Action could not be completed',
            data: data
        })
    }
}

const remove = async (req, res) =>
{
    try
    {
        await schema.findByIdAndDelete(req.params.id);
        res.send({
            status: 200,
            message: 'Data deleted'
        })
    } catch (e)
    {
        res.status(400).send({
            status: 400,
            message: 'Action could not be completed',
            data: data
        })
    }
}

//send user data
const user = async (req, res) =>
{
    try
    {
        // const userData = req.user;
        // console.log(userData);
        res.status(200).json({ msg: "Hi User" })

    } catch (error)
    {
        console.log(`Error from user data ${error}`);
    }
}



module.exports = {
    getAll,
    create,
    update,
    remove,
    getById,
    user,
}