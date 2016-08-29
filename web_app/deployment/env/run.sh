#!/usr/bin/env bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
cd $DIR/..
pwd

host=env/$1/hosts
help_run()
{
 echo "keep 1st arg as stage or production"
 echo "stage is for running stage.yml"
 echo "web is for running web.yml"

#add file names in above echo statements whereever missing
 echo "Select one OR more options from above list"
}



  echo -e "starting web job:-\n"
                                    ansible-playbook -vvvv web.yml -i $host || exit 1;
#shift 1st arg
shift

for opt in $@
 do
   case opt in

     setup)                echo -e "starting stage job:-\n"
                                    ansible-playbook -vvvv setup.yml -i $host || exit 1;;

     web)                  echo -e "starting web job:-\n"
                                    ansible-playbook -vvvv web.yml -i $host || exit 1;;

     *)                    echo -e "Nothing to run here.Run command in the form:-\n $(help_run)" ;;
   esac
 done
