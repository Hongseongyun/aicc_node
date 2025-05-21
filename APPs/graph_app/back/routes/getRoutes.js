const router = require('express').Router();
const getRoutes = require('../controllers/getControllers');

router.get('/salesMap', getRoutes.getSalesMap);
router.get('/visitors', getRoutes.getVisitors);
router.get('/customers', getRoutes.getCustomers);
router.get('/target_reality', getRoutes.getTarget_reality);
router.get('/volume_services', getRoutes.getVolume_services);
router.get('/top_products', getRoutes.getTop_products);
router.get('/revenue', getRoutes.getRevenue);

module.exports = router;
