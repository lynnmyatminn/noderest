module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("ag_user_users", {
    //   id: {
    //     type: Sequelize.INTEGER
    //   },
      account_number: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      account_type: {
        type: Sequelize.INTEGER
      },
      compay_name: {
        type: Sequelize.STRING
      },
      mobile_phone: {
        type: Sequelize.STRING
      },
      street_address: {
        type: Sequelize.STRING
      },
      idcard: {
        type: Sequelize.STRING
      },
      companyno: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      country_id: {
        type: Sequelize.INTEGER
      },
      customer_tax_code: {
        type: Sequelize.STRING
      },
      wechatid: {
        type: Sequelize.STRING
      },
      primary_phone: {
        type: Sequelize.STRING
      },
      secondary_phone: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.INTEGER
      },
      messenger_mobile: {
        type: Sequelize.STRING
      },
      state_province: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      zip_code: {
        type: Sequelize.STRING
      },
      unified_social_code: {
        type: Sequelize.STRING
      },
      contact_name: {
        type: Sequelize.STRING
      },
      contact_mobile_phone: {
        type: Sequelize.STRING
      },
      card_type: {
        type: Sequelize.STRING
      },
      idcardimg: {
        type: Sequelize.STRING
      },
      licenseimg: {
        type: Sequelize.STRING
      },
      create_time: {
        type: Sequelize.INTEGER
      },
      update_time: {
        type: Sequelize.INTEGER
      },
      delete_time: {
        type: Sequelize.INTEGER
      },
      sort: {
        type: Sequelize.INTEGER
      },
      remark: {
        type: Sequelize.STRING
      },
      openid: {
        type: Sequelize.STRING
      },
      push_status: {
        type: Sequelize.INTEGER
      },
      u_level: {
        type: Sequelize.INTEGER
      },
      u_used_money: {
        type: Sequelize.DECIMAL
      },
      u_balance_money: {
        type: Sequelize.DECIMAL
      }
    });
    return User;
  };