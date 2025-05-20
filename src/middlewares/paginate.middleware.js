export const paginate = (defaultLimit = 10) => (req, _res, next) => {
    const page  = Math.max(parseInt(req.query.page  ?? '1'), 1);
    const limit = Math.min(
      Math.max(parseInt(req.query.limit ?? defaultLimit), 1),
      100
    );
    req.pagination = { skip: (page - 1) * limit, limit };
    next();
  };
