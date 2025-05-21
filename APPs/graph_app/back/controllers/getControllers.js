const database = require('../database/database');

exports.getSalesMap = async (req, res) => {
  try {
    const resultSalesMap = await database.pool.query('SELECT * FROM sales_map');

    return res.status(200).json(resultSalesMap.rows);
  } catch (error) {
    return res.status(500).json({
      message: 'Error Occured While getting sales map data' + error.message,
    });
  }
};

exports.getVisitors = async (req, res) => {
  try {
    const resultVisitors = await database.pool.query('SELECT * FROM visitors');
    return res.status(200).json(resultVisitors.rows);
  } catch (error) {
    return res.status(500).json({
      message: 'Error Occured While getting visitors data' + error.message,
    });
  }
};

exports.getCustomers = async (req, res) => {
  try {
    const resultCustomers = await database.pool.query(
      'SELECT * FROM customers'
    );
    return res.status(200).json(resultCustomers.rows);
  } catch (error) {
    return res.status(500).json({
      message: 'Error Occured While getting customers data' + error.message,
    });
  }
};
exports.getTarget_reality = async (req, res) => {
  try {
    const resultTarget_reality = await database.pool.query(
      'SELECT * FROM target_reality'
    );
    return res.status(200).json(resultTarget_reality.rows);
  } catch (error) {
    return res.status(500).json({
      message:
        'Error Occured While getting target_reality data' + error.message,
    });
  }
};
exports.getVolume_services = async (req, res) => {
  try {
    const resultVolume_services = await database.pool.query(
      'SELECT * FROM volume_services'
    );
    return res.status(200).json(resultVolume_services.rows);
  } catch (error) {
    return res.status(500).json({
      message:
        'Error Occured While getting volume_services data' + error.message,
    });
  }
};
exports.getTop_products = async (req, res) => {
  try {
    const resultTop_products = await database.pool.query(
      'SELECT * FROM top_products'
    );
    return res.status(200).json(resultTop_products.rows);
  } catch (error) {
    return res.status(500).json({
      message: 'Error Occured While getting top_products data' + error.message,
    });
  }
};
exports.getRevenue = async (req, res) => {
  try {
    const resultRevenue = await database.pool.query('SELECT * FROM revenue');
    return res.status(200).json(resultRevenue.rows);
  } catch (error) {
    return res.status(500).json({
      message: 'Error Occured While getting revenue data' + error.message,
    });
  }
};
