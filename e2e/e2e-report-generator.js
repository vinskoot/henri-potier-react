// @flow

import report from 'multiple-cucumber-html-reporter';
import * as path from 'path';

const projectName = path.basename(__dirname);
const projectVersion = process.env.npm_package_version;
const reportGenerationTime = new Date().toISOString();
report.generate({
    customData: {
        data: [
            { label: 'Project', value: `${projectName}` },
            { label: 'Release', value: `${projectVersion || ''}` },
            { label: 'Report Generation Time', value: `${reportGenerationTime}` },
        ],
        title: 'Run info',
    },
    disableLog: true,
    displayDuration: true,
    durationInMS: true,
    jsonDir: 'e2e/reports',
    openReportInBrowser: true,
    reportName: 'TestCafe Report',
    reportPath: 'e2e/reports',
});
