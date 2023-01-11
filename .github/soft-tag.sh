status_result=$( bit status -j --strict | jq ".softTaggedComponents" )
if [ $status_result = "[]" ]; then
 message=$( git log -1 --pretty=%B )
 echo $message
 bit tag -m "$message" --soft
else
 bit status --strict
fi
