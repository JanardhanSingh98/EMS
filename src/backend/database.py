import mysql.connector;
import sqlhost

def openconnection(**args):
    tablename=args.get('tablename',None);
    databasename=args.get('databasename','users');
    # adding default database as users
    try:
        import mysql.connector;
        if(databasename ):
            cn=mysql.connector.connect(user='jordan',host='ems.cyixdazov2ps.us-east-2.rds.amazonaws.com',password='Janardhan',database=databasename);
        return cn;
    except:
        print("connection error 101");
        return 101