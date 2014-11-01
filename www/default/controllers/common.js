exports.legal = function(req, res) {
        res.render('pages/common/legal', {
            title : res.__("page.legal.html.title:Legal Documents")
        });
    };

exports.terms = function(req, res) {
        res.render('pages/common/terms', {
            title : res.__("page.terms.html.title:Terms and Conditions")
        });
    };

exports.copyright = function(req, res) {
        res.render('pages/common/copyright', {
            title : res.__("page.copyright.html.title:Copyright")
        });
    };
    
exports.privacy = function(req, res) {
        res.render('pages/common/privacy', {
            title : res.__("page.privacy.html.title:Privacy Policy")
        });
    };
    
exports.warranty = function(req, res) {
        res.render('pages/common/warranty', {
            title : res.__("page.warranty.html.title:Warranty")
        });
    };
    
exports.acceptable_use = function(req, res) {
        res.render('pages/common/acceptable_use', {
            title : res.__("page.acceptable_use.html.title:Acceptable Use Policy")
        });
    };
    
exports.site = function(req, res) {
        res.render('pages/common/site', {
            title : res.__("page.site.html.title:Site")
        });
    };
    
exports.history = function(req, res) {
        res.render('pages/common/history', {
            title : res.__("page.history.html.title:History")
        });
    };
    
exports.community_guidelines = function(req, res) {
        res.render('pages/common/community_guidelines', {
            title : res.__("page.community_guidelines.html.title:Community Guidelines")
        });
    };

exports.jobs = function(req, res) {
        res.render('pages/common/jobs', {
            title : res.__("page.jobs.html.title:Employment Opportunities")
        });
    };
    
exports.mission = function(req, res) {
        res.render('pages/common/mission', {
            title : res.__("page.mission.html.title:Mission")
        });
    };
    
exports.contact = function(req, res) {
        res.render('pages/common/contact', {
            title : res.__("page.contact.html.title:Contact")
        });
    };
    
exports.staff = function(req, res) {
        res.render('pages/common/staff', {
            title : res.__("page.staff.html.title:Staff")
        });
    };
