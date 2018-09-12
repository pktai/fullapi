import { find, add} from '../models/helpers/item.models.helpers';
import {formatSuccess, formatError} from '../utils/helpers/data-response.helper';

export const create = async (req,res) => {
    const barcode = req.body.barcode;
    const name = req.body.name;
    const price = req.body.price;
    const amount = req.body.amount;
    const status = req.body.status;

    if (!barcode) {
        res.json(formatError({
            message: 'barcode is required !'
        }))
    }

    if (!name) {
        res.json(formatError({
            message: 'name is required !'
        }))
    }

    if (!price) {
        res.json(formatError({
            message: 'price is required !'
        }))
    }

    const data = ({
        barcode,
        name,
        price,
        amount,
        status,
    })

    const result  = await add(data);

    res.json(formatSuccess({}, result));
}

export const findItemById = async (req, res) => {
    const id = req.params.id;

    if (!id) {
        res.json(formatError({
            message: 'id is a valid'
        }))
    }

    const result = await find(id);

    res.json(formatSuccess({}, result));
}