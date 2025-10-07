import type { Dimension, DateDimension, Attribute, DataSourceInfo } from '@sisense/sdk-data';

import { createAttribute, createDateDimension, createDimension } from '@sisense/sdk-data';

export const DataSource: DataSourceInfo = { title: 'Pipeline Analysis', type: 'elasticube' };

interface Q4Opps2025allQ4pipeline_csvDimension extends Dimension {
    Account: Attribute;
    AccountUseCase: Attribute;
    Age: Attribute;
    AverageACV: Attribute;
    Daysincurrentstage: Attribute;
    EngagementRisk: Attribute;
    ForecastCategoryNew: Attribute;
    ManagerComments: Attribute;
    NextStep: Attribute;
    Oper_System: Attribute;
    OpportunityType: Attribute;
    Owner: Attribute;
    PrimaryProjectType: Attribute;
    SalesEngineer: Attribute;
    StageName: Attribute;
    CloseDate: DateDimension;
    ContractEndDate: DateDimension;
    ContractStartDate: DateDimension;
    CreatedAt: DateDimension;
    NextStepDueDate: DateDimension;
}
export const Q4Opps2025allQ4pipeline_csv = createDimension({
    name: 'Q4 Opps 2025 - all Q4 pipeline.csv',
    Account: createAttribute({
        name: 'Account',
        type: 'text-attribute',
        expression: '[Q4 Opps 2025 - all Q4 pipeline.csv.Account]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    AccountUseCase: createAttribute({
        name: 'Account Use Case',
        type: 'text-attribute',
        expression: '[Q4 Opps 2025 - all Q4 pipeline.csv.Account Use Case]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    Age: createAttribute({
        name: 'Age',
        type: 'numeric-attribute',
        expression: '[Q4 Opps 2025 - all Q4 pipeline.csv.Age]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    AverageACV: createAttribute({
        name: 'Average ACV',
        type: 'text-attribute',
        expression: '[Q4 Opps 2025 - all Q4 pipeline.csv.Average ACV]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    Daysincurrentstage: createAttribute({
        name: 'Days in current stage',
        type: 'numeric-attribute',
        expression: '[Q4 Opps 2025 - all Q4 pipeline.csv.Days in current stage]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    EngagementRisk: createAttribute({
        name: 'Engagement Risk',
        type: 'numeric-attribute',
        expression: '[Q4 Opps 2025 - all Q4 pipeline.csv.Engagement Risk]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    ForecastCategoryNew: createAttribute({
        name: 'Forecast Category (New)',
        type: 'text-attribute',
        expression: '[Q4 Opps 2025 - all Q4 pipeline.csv.Forecast Category (New)]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    ManagerComments: createAttribute({
        name: 'Manager Comments',
        type: 'text-attribute',
        expression: '[Q4 Opps 2025 - all Q4 pipeline.csv.Manager Comments]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    NextStep: createAttribute({
        name: 'Next Step',
        type: 'text-attribute',
        expression: '[Q4 Opps 2025 - all Q4 pipeline.csv.Next Step]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    Oper_System: createAttribute({
        name: 'Oper. System',
        type: 'text-attribute',
        expression: '[Q4 Opps 2025 - all Q4 pipeline.csv.Oper. System]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    OpportunityType: createAttribute({
        name: 'Opportunity Type',
        type: 'text-attribute',
        expression: '[Q4 Opps 2025 - all Q4 pipeline.csv.Opportunity Type]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    Owner: createAttribute({
        name: 'Owner',
        type: 'text-attribute',
        expression: '[Q4 Opps 2025 - all Q4 pipeline.csv.Owner]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    PrimaryProjectType: createAttribute({
        name: 'Primary Project Type',
        type: 'text-attribute',
        expression: '[Q4 Opps 2025 - all Q4 pipeline.csv.Primary Project Type]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    SalesEngineer: createAttribute({
        name: 'Sales Engineer',
        type: 'text-attribute',
        expression: '[Q4 Opps 2025 - all Q4 pipeline.csv.Sales Engineer]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    StageName: createAttribute({
        name: 'Stage Name',
        type: 'text-attribute',
        expression: '[Q4 Opps 2025 - all Q4 pipeline.csv.Stage Name]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    CloseDate: createDateDimension({
        name: 'Close Date',
        expression: '[Q4 Opps 2025 - all Q4 pipeline.csv.Close Date (Calendar)]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    ContractEndDate: createDateDimension({
        name: 'Contract End Date',
        expression: '[Q4 Opps 2025 - all Q4 pipeline.csv.Contract End Date (Calendar)]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    ContractStartDate: createDateDimension({
        name: 'Contract Start Date',
        expression: '[Q4 Opps 2025 - all Q4 pipeline.csv.Contract Start Date (Calendar)]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    CreatedAt: createDateDimension({
        name: 'Created At',
        expression: '[Q4 Opps 2025 - all Q4 pipeline.csv.Created At (Calendar)]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    NextStepDueDate: createDateDimension({
        name: 'Next Step Due Date',
        expression: '[Q4 Opps 2025 - all Q4 pipeline.csv.Next Step Due Date (Calendar)]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
}) as Q4Opps2025allQ4pipeline_csvDimension;

interface Q4_Pipeline_Analysis_SingleTab_csvDimension extends Dimension {
    _AgeDays: Attribute;
    _DaysInStage: Attribute;
    _DaysSinceLastActivity: Attribute;
    _IsClosed: Attribute;
    _LastActivity: Attribute;
    _OppType: Attribute;
    _StaleFlag: Attribute;
    _StaleReason: Attribute;
    Account: Attribute;
    AccountUseCase: Attribute;
    Age: Attribute;
    AverageACV: Attribute;
    BestCase: Attribute;
    Commit: Attribute;
    Daysincurrentstage: Attribute;
    EngagementRisk: Attribute;
    ForecastCategoryNew: Attribute;
    ManagerComments: Attribute;
    MostLikely: Attribute;
    NextStep: Attribute;
    Oper_System: Attribute;
    OpportunityType: Attribute;
    Owner: Attribute;
    Pipeline: Attribute;
    PrimaryProjectType: Attribute;
    SalesEngineer: Attribute;
    Section: Attribute;
    StageName: Attribute;
    StageName_1: Attribute;
    _Close: DateDimension;
    _Created: DateDimension;
    CloseDate: DateDimension;
    ContractEndDate: DateDimension;
    ContractStartDate: DateDimension;
    CreatedAt: DateDimension;
    NextStepDueDate: DateDimension;
}
export const Q4_Pipeline_Analysis_SingleTab_csv = createDimension({
    name: 'Q4_Pipeline_Analysis_SingleTab.csv',
    _AgeDays: createAttribute({
        name: '_AgeDays',
        type: 'numeric-attribute',
        expression: '[Q4_Pipeline_Analysis_SingleTab.csv._AgeDays]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    _DaysInStage: createAttribute({
        name: '_DaysInStage',
        type: 'text-attribute',
        expression: '[Q4_Pipeline_Analysis_SingleTab.csv._DaysInStage]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    _DaysSinceLastActivity: createAttribute({
        name: '_DaysSinceLastActivity',
        type: 'text-attribute',
        expression: '[Q4_Pipeline_Analysis_SingleTab.csv._DaysSinceLastActivity]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    _IsClosed: createAttribute({
        name: '_IsClosed',
        type: 'numeric-attribute',
        expression: '[Q4_Pipeline_Analysis_SingleTab.csv._IsClosed]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    _LastActivity: createAttribute({
        name: '_LastActivity',
        type: 'text-attribute',
        expression: '[Q4_Pipeline_Analysis_SingleTab.csv._LastActivity]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    _OppType: createAttribute({
        name: '_OppType',
        type: 'text-attribute',
        expression: '[Q4_Pipeline_Analysis_SingleTab.csv._OppType]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    _StaleFlag: createAttribute({
        name: '_StaleFlag',
        type: 'numeric-attribute',
        expression: '[Q4_Pipeline_Analysis_SingleTab.csv._StaleFlag]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    _StaleReason: createAttribute({
        name: '_StaleReason',
        type: 'text-attribute',
        expression: '[Q4_Pipeline_Analysis_SingleTab.csv._StaleReason]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    Account: createAttribute({
        name: 'Account',
        type: 'text-attribute',
        expression: '[Q4_Pipeline_Analysis_SingleTab.csv.Account]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    AccountUseCase: createAttribute({
        name: 'Account Use Case',
        type: 'text-attribute',
        expression: '[Q4_Pipeline_Analysis_SingleTab.csv.Account Use Case]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    Age: createAttribute({
        name: 'Age',
        type: 'numeric-attribute',
        expression: '[Q4_Pipeline_Analysis_SingleTab.csv.Age]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    AverageACV: createAttribute({
        name: 'Average ACV',
        type: 'text-attribute',
        expression: '[Q4_Pipeline_Analysis_SingleTab.csv.Average ACV]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    BestCase: createAttribute({
        name: 'Best Case',
        type: 'numeric-attribute',
        expression: '[Q4_Pipeline_Analysis_SingleTab.csv.Best Case]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    Commit: createAttribute({
        name: 'Commit',
        type: 'numeric-attribute',
        expression: '[Q4_Pipeline_Analysis_SingleTab.csv.Commit]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    Daysincurrentstage: createAttribute({
        name: 'Days in current stage',
        type: 'numeric-attribute',
        expression: '[Q4_Pipeline_Analysis_SingleTab.csv.Days in current stage]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    EngagementRisk: createAttribute({
        name: 'Engagement Risk',
        type: 'numeric-attribute',
        expression: '[Q4_Pipeline_Analysis_SingleTab.csv.Engagement Risk]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    ForecastCategoryNew: createAttribute({
        name: 'Forecast Category (New)',
        type: 'text-attribute',
        expression: '[Q4_Pipeline_Analysis_SingleTab.csv.Forecast Category (New)]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    ManagerComments: createAttribute({
        name: 'Manager Comments',
        type: 'text-attribute',
        expression: '[Q4_Pipeline_Analysis_SingleTab.csv.Manager Comments]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    MostLikely: createAttribute({
        name: 'Most Likely',
        type: 'numeric-attribute',
        expression: '[Q4_Pipeline_Analysis_SingleTab.csv.Most Likely]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    NextStep: createAttribute({
        name: 'Next Step',
        type: 'text-attribute',
        expression: '[Q4_Pipeline_Analysis_SingleTab.csv.Next Step]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    Oper_System: createAttribute({
        name: 'Oper. System',
        type: 'text-attribute',
        expression: '[Q4_Pipeline_Analysis_SingleTab.csv.Oper. System]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    OpportunityType: createAttribute({
        name: 'Opportunity Type',
        type: 'text-attribute',
        expression: '[Q4_Pipeline_Analysis_SingleTab.csv.Opportunity Type]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    Owner: createAttribute({
        name: 'Owner',
        type: 'text-attribute',
        expression: '[Q4_Pipeline_Analysis_SingleTab.csv.Owner]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    Pipeline: createAttribute({
        name: 'Pipeline',
        type: 'numeric-attribute',
        expression: '[Q4_Pipeline_Analysis_SingleTab.csv.Pipeline]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    PrimaryProjectType: createAttribute({
        name: 'Primary Project Type',
        type: 'text-attribute',
        expression: '[Q4_Pipeline_Analysis_SingleTab.csv.Primary Project Type]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    SalesEngineer: createAttribute({
        name: 'Sales Engineer',
        type: 'text-attribute',
        expression: '[Q4_Pipeline_Analysis_SingleTab.csv.Sales Engineer]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    Section: createAttribute({
        name: 'Section',
        type: 'text-attribute',
        expression: '[Q4_Pipeline_Analysis_SingleTab.csv.Section]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    StageName: createAttribute({
        name: 'Stage Name',
        type: 'text-attribute',
        expression: '[Q4_Pipeline_Analysis_SingleTab.csv.Stage Name]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    StageName_1: createAttribute({
        name: 'Stage Name.1',
        type: 'text-attribute',
        expression: '[Q4_Pipeline_Analysis_SingleTab.csv.Stage Name.1]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    _Close: createDateDimension({
        name: '_Close',
        expression: '[Q4_Pipeline_Analysis_SingleTab.csv._Close (Calendar)]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    _Created: createDateDimension({
        name: '_Created',
        expression: '[Q4_Pipeline_Analysis_SingleTab.csv._Created (Calendar)]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    CloseDate: createDateDimension({
        name: 'Close Date',
        expression: '[Q4_Pipeline_Analysis_SingleTab.csv.Close Date (Calendar)]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    ContractEndDate: createDateDimension({
        name: 'Contract End Date',
        expression: '[Q4_Pipeline_Analysis_SingleTab.csv.Contract End Date (Calendar)]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    ContractStartDate: createDateDimension({
        name: 'Contract Start Date',
        expression: '[Q4_Pipeline_Analysis_SingleTab.csv.Contract Start Date (Calendar)]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    CreatedAt: createDateDimension({
        name: 'Created At',
        expression: '[Q4_Pipeline_Analysis_SingleTab.csv.Created At (Calendar)]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
    NextStepDueDate: createDateDimension({
        name: 'Next Step Due Date',
        expression: '[Q4_Pipeline_Analysis_SingleTab.csv.Next Step Due Date (Calendar)]',
        dataSource: { title: 'Pipeline Analysis', live: false },
    }),
}) as Q4_Pipeline_Analysis_SingleTab_csvDimension;
