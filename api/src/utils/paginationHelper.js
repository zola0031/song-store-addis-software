const getPaginatedData = async (table, page = 1, limit = 10, filter = {}) => {
  const skip = (page - 1) * limit;
  const [data, total] = await Promise.all([
    table.find(filter).skip(skip).limit(limit),
    table.countDocuments(filter),
  ]);
  return { total, data };
};
const getPaginatedDataWithUser = async (
  table,
  page = 1,
  limit = 10,
  filter = {}
) => {
  const skip = (page - 1) * limit;
  const [data, total] = await Promise.all([
    table.find(filter).populate("user", "-password").skip(skip).limit(limit),
    table.countDocuments(filter),
  ]);
  return { total, data };
};

const getStatics = async (table, condition = null) => {
  const result = await table.aggregate([
    {
      $group: { _id: condition, count: { $count: {} } },
    },
  ]);
  return result;
};
export { getPaginatedDataWithUser, getPaginatedData, getStatics };
