var arc = require('./ar-controller.js');

exports.legal = function(req, res) {
        res.render('pages/common/legal', {
            title : res.__("page.legal.html.title:Legal Documents"),
            layout: arc.vLayout(req),
            user : req.user,
            ar_nl1 : 'ar-nl1-' + res.__('nav.legal.alias:legal'),
            ar_nl2 : null,
            ar_nl3 : null
        });
    };

exports.terms = function(req, res) {
        res.render('pages/common/terms', {
            title : res.__("page.terms.html.title:Terms and Conditions"),
            layout: arc.vLayout(req),
            user : req.user,
            ar_nl1 : 'ar-nl1-' + res.__('nav.legal.alias:legal'),
            ar_nl2 : 'ar-nl2-' + res.__('nav.terms.alias:terms'),
            ar_nl3 : null
        });
    };

exports.copyright = function(req, res) {
        res.render('pages/common/copyright', {
            title : res.__("page.copyright.html.title:Copyright"),
            layout: arc.vLayout(req),
            user : req.user,
            ar_nl1 : 'ar-nl1-' + res.__('nav.legal.alias:legal'),
            ar_nl2 : 'ar-nl2-' + res.__('nav.copyright.alias:copyright'),
            ar_nl3 : null
        });
    };
    
exports.privacy = function(req, res) {
        res.render('pages/common/privacy', {
            title : res.__("page.privacy.html.title:Privacy Policy"),
            layout: arc.vLayout(req),
            user : req.user,
            ar_nl1 : 'ar-nl1-' + res.__('nav.legal.alias:legal'),
            ar_nl2 : 'ar-nl2-' + res.__('nav.privacy.alias:privacy'),
            ar_nl3 : null
        });
    };
    
exports.warranty = function(req, res) {
        res.render('pages/common/warranty', {
            title : res.__("page.warranty.html.title:Warranty"),
            layout: arc.vLayout(req),
            user : req.user,
            ar_nl1 : 'ar-nl1-' + res.__('nav.legal.alias:legal'),
            ar_nl2 : 'ar-nl2-' + res.__('nav.warranty.alias:warranty'),
            ar_nl3 : null
        });
    };
    
exports.acceptable_use = function(req, res) {
        res.render('pages/common/acceptable_use', {
            title : res.__("page.acceptable_use.html.title:Acceptable Use Policy"),
            layout: arc.vLayout(req),
            user : req.user,
            ar_nl1 : 'ar-nl1-' + res.__('nav.legal.alias:legal'),
            ar_nl2 : 'ar-nl2-' + res.__('nav.acceptable_use.alias:acceptable_use'),
            ar_nl3 : null
        });
    };
    
exports.site = function(req, res) {
        res.render('pages/common/site', {
            title : res.__("page.site.html.title:Site"),
            layout: arc.vLayout(req),
            user : req.user,
            ar_nl1 : 'ar-nl1-' + res.__('nav.site.alias:site'),
            ar_nl2 : null,
            ar_nl3 : null
        });
    };
    
exports.history = function(req, res) {
        res.render('pages/common/history', {
            title : res.__("page.history.html.title:History"),
            layout: arc.vLayout(req),
            user : req.user,
            ar_nl1 : 'ar-nl1-' + res.__('nav.site.alias:site'),
            ar_nl2 : 'ar-nl2-' + res.__('nav.history.alias:history'),
            ar_nl3 : null
        });
    };
    
exports.community_guidelines = function(req, res) {
        res.render('pages/common/community_guidelines', {
            title : res.__("page.community_guidelines.html.title:Community Guidelines"),
            layout: arc.vLayout(req),
            user : req.user,
            ar_nl1 : 'ar-nl1-' + res.__('nav.site.alias:site'),
            ar_nl2 : 'ar-nl2-' + res.__('nav.community_guidelines.alias:community_guidelines'),
            ar_nl3 : null
        });
    };

exports.jobs = function(req, res) {
        res.render('pages/common/jobs', {
            title : res.__("page.jobs.html.title:Employment Opportunities"),
            layout: arc.vLayout(req),
            user : req.user,
            ar_nl1 : 'ar-nl1-' + res.__('nav.site.alias:site'),
            ar_nl2 : 'ar-nl2-' + res.__('nav.jobs.alias:jobs'),
            ar_nl3 : null
        });
    };
    
exports.mission = function(req, res) {
        res.render('pages/common/mission', {
            title : res.__("page.mission.html.title:Mission"),
            layout: arc.vLayout(req),
            user : req.user,
            ar_nl1 : 'ar-nl1-' + res.__('nav.site.alias:site'),
            ar_nl2 : 'ar-nl2-' + res.__('nav.mission.alias:mission'),
            ar_nl3 : null
        });
    };
    
exports.contact = function(req, res) {
        res.render('pages/common/contact', {
            title : res.__("page.contact.html.title:Contact"),
            layout: arc.vLayout(req),
            user : req.user,
            ar_nl1 : 'ar-nl1-' + res.__('nav.site.alias:site'),
            ar_nl2 : 'ar-nl2-' + res.__('nav.contact.alias:contact'),
            ar_nl3 : null
        });
    };
    
exports.staff = function(req, res) {
        res.render('pages/common/staff', {
            title : res.__("page.staff.html.title:Staff"),
            layout: arc.vLayout(req),
            user : req.user,
            ar_nl1 : 'ar-nl1-' + res.__('nav.site.alias:site'),
            ar_nl2 : 'ar-nl2-' + res.__('nav.staff.alias:staff'),
            ar_nl3 : null
        });
    };
    
exports.sales = function(req, res) {
        res.render('pages/common/sales', {
            title : res.__("page.sales.html.title:Staff"),
            layout: arc.vLayout(req),
            user : req.user,
            ar_nl1 : 'ar-nl1-' + res.__('nav.contact.alias:contact'),
            ar_nl2 : 'ar-nl2-' + res.__('nav.sales.alias:sales'),
            ar_nl3 : null
        });
    };
    
exports.support = function(req, res) {
        res.render('pages/common/support', {
            title : res.__("page.support.html.title:Staff"),
            layout: arc.vLayout(req),
            user : req.user,
            ar_nl1 : 'ar-nl1-' + res.__('nav.contact.alias:contact'),
            ar_nl2 : 'ar-nl2-' + res.__('nav.support.alias:support'),
            ar_nl3 : null
        });
    };
    
exports.advertising = function(req, res) {
        res.render('pages/common/advertising', {
            title : res.__("page.advertising.html.title:Staff"),
            layout: arc.vLayout(req),
            user : req.user,
            ar_nl1 : 'ar-nl1-' + res.__('nav.contact.alias:contact'),
            ar_nl2 : 'ar-nl2-' + res.__('nav.advertising.alias:advertising'),
            ar_nl3 : null
        });
    };
    
 exports.billing = function(req, res) {
        res.render('pages/common/billing', {
            title : res.__("page.billing.html.title:Staff"),
            layout: arc.vLayout(req),
            user : req.user,
            ar_nl1 : 'ar-nl1-' + res.__('nav.contact.alias:contact'),
            ar_nl2 : 'ar-nl2-' + res.__('nav.billing.alias:billing'),
            ar_nl3 : null
        });
    };
    
exports.shipping = function(req, res) {
        res.render('pages/common/shipping', {
            title : res.__("page.shipping.html.title:Staff"),
            layout: arc.vLayout(req),
            user : req.user,
            ar_nl1 : 'ar-nl1-' + res.__('nav.contact.alias:contact'),
            ar_nl2 : 'ar-nl2-' + res.__('nav.shipping.alias:shipping'),
            ar_nl3 : null
        });
    };
