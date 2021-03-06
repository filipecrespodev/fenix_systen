'use strict';

angular.module('app')
.controller('homeCtrl', ['$scope', '$http', '$filter', '$uibModal', 'serviceModalAniversarioCtrl', 'serviceModalNotificacaoCtrl', 'HeaderFactory', 'serviceHeaderHomeCtrl', '$interval', 
                function($scope, $http, $filter, $uibModal, serviceModalAniversarioCtrl, serviceModalNotificacaoCtrl, HeaderFactory, serviceHeaderHomeCtrl, $interval)
{
    var funcionarios = _funcionarios_modal;
    var tempoAtualizarNotificacao = _notificacao_tempo;
    var atualizarNotificacao = _notificacao_can;
    
    var init = function()
    {
        $scope.funcionarios = serviceHeaderHomeCtrl.getFormataAniversariantes( funcionarios );

        if( atualizarNotificacao )
        {
            listarNotificacoes();
            $interval(listarNotificacoes, 500);
        }
        
    };

    var listarNotificacoes = function()
    {
        $scope.notificacoes = serviceHeaderHomeCtrl.getNotificacoes();
        $scope.notificacoes_nao_lidas = serviceHeaderHomeCtrl.getNotificacoesNaoLidas();
    }
   
    $scope.modalTodosAniversarios = function()
	{
        serviceModalAniversarioCtrl.modal( $scope.funcionarios );
    };

    $scope.modalTodasNotificacoes = function()
    {
        serviceModalNotificacaoCtrl.modal( $scope );
    };
    
    init();
}]);

