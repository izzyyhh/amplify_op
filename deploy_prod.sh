#!/bin/bash
echo "deploy"
# set -e
# IFS='|'

# CODEGEN="{\
# \"generateCode\":true,\
# \"codeLanguage\":\"javascript\",\
# \"fileNamePattern\":\"src/graphql/**/*.js\",\
# \"generatedFileName\":\"API\",\
# \"generateDocs\":true\
# }"

# REACTCONFIG="{\
# \"SourceDir\":\"src\",\
# \"DistributionDir\":\"dist\",\
# \"BuildCommand\":\"npm run build\",\
# \"StartCommand\":\"npm run start\"\
# }"
# AWSCLOUDFORMATIONCONFIG="{\
# \"configLevel\":\"project\",\
# \"useProfile\":true,\
# \"profileName\":\"default\",\
# \"region\":\"eu-central-1\"\
# }"
# AMPLIFY="{\
# \"projectName\":\"izzy\",\
# \"envName\":\"prod\",\
# \"defaultEditor\":\"code\"\
# }"
# FRONTEND="{\
# \"frontend\":\"javascript\",\
# \"framework\":\"react\",\
# \"config\":$REACTCONFIG\
# }"
# PROVIDERS="{\
# \"awscloudformation\":$AWSCLOUDFORMATIONCONFIG\
# }"


# amplify init \
# --amplify $AMPLIFY \
# --frontend $FRONTEND \
# --providers $PROVIDERS \
# --yes \
# --appId appid \


# amplify publish \
# --codegen $CODEGEN \
# --yes \
# --appId appid \
# --envName prod
