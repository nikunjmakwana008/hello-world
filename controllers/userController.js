const express = require('express');
const db = require('./../util/database');


exports.getallUsers = async (req, res) => {

    const result = await db.execute('select * from user_master where userid = 97');

    res.status(200).json({
        status: 'success',
        requestedAt: "req.requestTime",
        data: {
          tours: result[0][0]
        }
      });
}


