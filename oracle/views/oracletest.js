var oracledb = require('oracledb');

oracledb.getConnection(
    {
        user          : "biee_biplatform",
        password      : "Admin123",
        connectString : "obiee/pdborcl"
    },
    function(err, connection)
    {
        if (err) {
            console.error(err.message);
            return;
        }
        connection.execute(
            "SELECT job_id, name, script_type " +
            "FROM s_nq_job ", //+
            //"WHERE manager_id < :id",
            //[110],  // bind value for :id
            function(err, result)
            {
                if (err) {
                    console.error(err.message);
                    doRelease(connection);
                    return;
                }
                console.log(result.rows);
                doRelease(connection);
            });
    });

function doRelease(connection)
{
    connection.close(
        function(err) {
            if (err)
                console.error(err.message);
        });
}
