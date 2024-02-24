const { errors } = require('./errors.js')

const errorWrapper = (handler) => {
    return async (req, res, next) => {
        try {
            await handler(req, res, next);
        } catch (e) {
            const errorMessage = {
                timestamp: new Date().toISOString(),
                api: req.originalUrl,
                message: e.message,
                payload: req.body,
                details: e.details,
                stack: e.stack
            };

            if (errors[e.message]) {

                console.log(errorMessage);
                return res.status(errors[e.message]).json({ message: e.message });
            }

            console.log(errorMessage);

            res.status(500).json({ error: 'Internal Server Error' });
        }
    };
}

module.exports = {
    errorWrapper
}