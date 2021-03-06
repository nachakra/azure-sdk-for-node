/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Represents a data export setting
 *
 * @extends models['Setting']
 */
class DataExportSetting extends models['Setting'] {
  /**
   * Create a DataExportSetting.
   * @member {boolean} enabled Is the data export setting is enabled
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of DataExportSetting
   *
   * @returns {object} metadata of DataExportSetting
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DataExportSetting',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'kind',
          clientName: 'kind'
        },
        uberParent: 'Setting',
        className: 'DataExportSetting',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          kind: {
            required: true,
            serializedName: 'kind',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          enabled: {
            required: true,
            serializedName: 'properties.enabled',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = DataExportSetting;
