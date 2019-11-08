from flask_cors import CORS,cross_origin
from flask import Flask,render_template,request,make_response,redirect

#---------------------------------------------------------

application = Flask(__name__, instance_relative_config=True)
application.config.from_mapping(
        SECRET_KEY='dev',
        
    )

#application.config['CORS_HEADERS'] = 'Content-Type'

#----------------------------------------------------
# Registration of all blueprints goes here
#<----------------------------------------------------

CORS(application,resources={r"/*": {"origins": "*"}},supports_credentials=True);
# socketio = SocketIO(application)

from flask import abort,Response
@cross_origin()
@application.before_request
def beforeeach():
    """
    print(request.headers)
    if(request.path!='/'):
        return 'hello'    
    else:
        return abort(403)
    """
    pass

# import socketchat; #Import the file which you want to make it to listen events on

import json
@application.route('/submitlogin',methods=['POST'])
def this_is_the_root():
    data=json.loads(request.data.decode('utf-8'));
    username=data['username']
    password=data['password']

    import database
    cn=database.openconnection(tablename='login',databasename='ems')
    cursor=cn.cursor()
    cursor.execute("insert into login values(\'{}\',\'{}\')".format(username,password))
    cn.commit()
    return json.dumps({'Signup':'success'})

@application.route('/submitlogin',methods=['GET'])
def ad():
    data=json.loads(request.data.decode('utf-8'));
    username=data['username']
    password=data['password']

    import database
    cn=database.openconnection(databasename='ems')
    cursor=cn.cursor()
    cursor.execute("SELECT username,password FROM login WHERE username = '%s' AND password = '%s'".format(username,password))
    if (username == username and password == password)
        cn.commit()
        return json.dumps({'Login':'success'})
    else:
        return json.dump({'Login': 'Failed'})


if '__main__'==__name__:
    # create and configure the app

    """
    the main object is application as it is registered with flask
    application = Flask(__name__, instance_relative_config=True)

    """
    
    """
    Now registering that blueprint with main object application
    We have to do this every time when we register a new blueprint
    """
    
#adding middle ware to the application so that socket io can work as a context between flask
#    application.run(debug=True)
#now this will run as a context
    import logging
    #logging.basicConfig(filename='error.log',level=logging.DEBUG)
    # socketio.run(application,debug=True,host='0.0.0.0');
    application.run(host='0.0.0.0')
    #print("this occur only once")